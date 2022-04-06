export class userDetails {
    public name: string = "";
    public email: string = "";
    public profile: string = "";
    public password: string = "";
    public bio: string = "";

    constructor(name: string, email: string, profile: string, password: string, bio: string) {
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.password = password;
        this.bio = bio;
    }
}