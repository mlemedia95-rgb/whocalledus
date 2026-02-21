-- Phone numbers table
CREATE TABLE IF NOT EXISTS phone_numbers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  number VARCHAR(20) NOT NULL UNIQUE,
  search_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone_number VARCHAR(20) NOT NULL,
  name VARCHAR(100),
  comment TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  is_spam BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_comments_phone ON comments(phone_number);
CREATE INDEX IF NOT EXISTS idx_phone_numbers_number ON phone_numbers(number);

-- RLS Policies
ALTER TABLE phone_numbers ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read
CREATE POLICY "Allow public read phone_numbers" ON phone_numbers FOR SELECT USING (true);
CREATE POLICY "Allow public read comments" ON comments FOR SELECT USING (true);

-- Allow anyone to insert
CREATE POLICY "Allow public insert phone_numbers" ON phone_numbers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert comments" ON comments FOR INSERT WITH CHECK (true);

-- Allow update search count
CREATE POLICY "Allow public update phone_numbers" ON phone_numbers FOR UPDATE USING (true);
