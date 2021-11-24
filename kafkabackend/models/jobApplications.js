const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    status: {
        // Submitted : 1 , reviewed : 2, initial screening : 3, Interviewing : 4, Hired : 5
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 1
    }
})

const JobApplication = mongoose.model("JobApplications", jobApplicationSchema);
module.exports.jobSchema = jobApplicationSchema
module.exports.Jobs = JobApplication