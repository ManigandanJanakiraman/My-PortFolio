interface my_Data {
    Projects: Projects[];
    Skills: Skills[];
    Profile: string;
    icons: string[]
}
interface Projects {
    Title: string[];
    Name: string;
    Experience: string;
    language: string
}
interface Skills {
    language: string;
    level: number;
    Experience: string;
    image: string
}
