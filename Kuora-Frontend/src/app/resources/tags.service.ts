import { Injectable } from "@angular/core";

@Injectable()
export class TagsService {
    private tagNames: string[] = [
    'Academic',
    'KIIT Campus',
    'Sports',
    'Internship',
    'Job',
    'Higher Education',
    'Student Society',
    'Job Opportunity',
    'Hackathons',
    'Hostel',
    'Training & Placement',
    'Others'
    ];

    getTagNames(){
        return this.tagNames;
    }
}