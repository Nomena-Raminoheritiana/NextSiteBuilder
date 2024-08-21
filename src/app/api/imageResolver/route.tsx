import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const url = new URL(request.url);
    const siteModelName = url.searchParams.get('siteModelName');
    const fileName = url.searchParams.get('fileName');
    if(!fileName || !siteModelName) {
        return NextResponse.json({ error: 'Image Not Found' }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), `src/app/${siteModelName}/ui/Themes/ImagesPreview`, fileName);

    try {
        const data = fs.readFileSync(filePath);

        return new NextResponse(data, {
            headers: { 'Content-Type': 'image/png' },
        });
    } catch (err) {
        return NextResponse.json({ error: 'Image Not Found' }, { status: 404 });
    }
}
