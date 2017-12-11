export class Job {
    constructor(
        private jobContent: String,
        private jobDatePosted: Date,
        private jobId: String,
        private jobLocation: String[],
        private jobProvider: String,
        private jobProviderLogo: String,
        private jobSource: String,
        private jobSourceLogo: String,
        private jobTags: String[],
        private jobTitle: String,
        private jobUrl: String,
        private shortDescription: String
    ) {}
}
