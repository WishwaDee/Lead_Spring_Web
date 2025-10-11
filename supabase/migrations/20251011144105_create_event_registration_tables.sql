/*
  # Event Registration System - Harry Potter Theme

  ## Overview
  This migration creates tables for managing event participant registrations
  and admin authentication for a Harry Potter themed event website.

  ## New Tables
  
  ### 1. `participants`
  Stores all registered participants for the event
  - `id` (uuid, primary key) - Unique identifier for each participant
  - `full_name` (text, required) - Participant's full name
  - `email` (text, required, unique) - Participant's email address
  - `phone` (text, optional) - Contact phone number
  - `house_preference` (text, optional) - Preferred Hogwarts house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
  - `dietary_restrictions` (text, optional) - Any dietary restrictions or preferences
  - `additional_notes` (text, optional) - Any additional information from participant
  - `registered_at` (timestamptz) - Timestamp when participant registered
  - `created_at` (timestamptz) - Record creation timestamp

  ### 2. `admin_profiles`
  Extends Supabase auth.users for admin-specific data
  - `id` (uuid, primary key, references auth.users) - Links to auth.users table
  - `email` (text, required) - Admin email address
  - `created_at` (timestamptz) - Profile creation timestamp

  ## Security
  
  ### Row Level Security (RLS)
  - Enable RLS on all tables
  - Participants table: Public can insert (for registration), only authenticated admins can read
  - Admin profiles table: Only authenticated admins can read their own profile
  
  ### Policies
  1. Anyone can register as a participant (INSERT)
  2. Only authenticated admins can view all participants (SELECT)
  3. Only authenticated admins can view admin profiles (SELECT)
  4. Only authenticated admins can delete participants (DELETE)

  ## Notes
  - Email uniqueness ensures no duplicate registrations
  - All timestamps use timestamptz for timezone awareness
  - House preference is optional to allow flexibility
  - Admin access controlled through Supabase authentication
*/

-- Create participants table
CREATE TABLE IF NOT EXISTS participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  house_preference text,
  dietary_restrictions text,
  additional_notes text,
  registered_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create admin profiles table
CREATE TABLE IF NOT EXISTS admin_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;

-- Policies for participants table
CREATE POLICY "Anyone can register as participant"
  ON participants
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated admins can view all participants"
  ON participants
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated admins can delete participants"
  ON participants
  FOR DELETE
  TO authenticated
  USING (true);

-- Policies for admin_profiles table
CREATE POLICY "Admins can view own profile"
  ON admin_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can insert own profile"
  ON admin_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create index on participants email for faster lookups
CREATE INDEX IF NOT EXISTS participants_email_idx ON participants(email);
CREATE INDEX IF NOT EXISTS participants_registered_at_idx ON participants(registered_at DESC);