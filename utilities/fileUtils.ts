
export const IsImage = (fileName:string):boolean =>
{
    if(fileName.endsWith('.jpg') ||
       fileName.endsWith('.jpeg') ||
       fileName.endsWith('.bmp') ||
        fileName.endsWith('.png'))
        return true;

    return false;
}