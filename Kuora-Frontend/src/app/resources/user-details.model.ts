export class userDetails {
    public name: string = "";
    public email: string = "";
    public profile: string = "";
    public bio: string = "";
    public verified: string = "";

    constructor(name: string, email: string, profile: string, bio: string, verified: string) {
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.bio = bio;
        this.verified = verified;
    }
}