export class ParentComponent {
    latestReleaseVersion: string;
    constructor() {
        this.latestReleaseVersion = 'v3.1.4';
    }
    getLatestReleaseVersion() {
        return this.latestReleaseVersion;
    }
}
