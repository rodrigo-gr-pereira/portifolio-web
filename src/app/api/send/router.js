import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_7hBEymng_JbjHazbn1JReLNnJqC5sBLVM');

export async function POST(){
    try{
        const data = await resend.emails.send({
        from: 'Judi <webdecodedtutorial.com>',
        to: ['webdecodedtutorial@gmail.com'],
        subject: 'Hello World',
        react: EmailTemplate({ firstName: 'John'}),
});    

    return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error })
}
}