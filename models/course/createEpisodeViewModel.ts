export interface CreateEpisodeViewModel{
    courseId: number;
    sectionId: number;
    title: string;
    englishTitle: string;
    description: string;
    time: string;
    videoFile: string;
    attachmentFile: string;
    isFree: boolean;
}