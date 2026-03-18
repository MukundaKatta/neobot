import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase.from('devices').select('*');
    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch devices' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, ...updates } = await request.json();
    const { data, error } = await supabase.from('devices').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update device' }, { status: 500 });
  }
}
