export interface EditEpisodeViewModel{
    courseId: number;
    sectionId: number;
    episodeId: number;
    title: string;
    englishTitle: string;
    description: string;
    time: string;
    videoFile: string;
    attachmentFile: string;
    isFree: boolean;
}