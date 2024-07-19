import { Job } from "@/constants/interface";
import { Store } from "@tanstack/store";



export const jobStore = new Store({
    jobs: [] as Job[],
});

export const setJobs = (jobs: Job[]) => {
    jobStore.setState((state) => ({
        ...state,
        jobs,
    }));
};

export const addJob = (job: Job) => {
    jobStore.setState((state) => ({
        ...state,
        jobs: [...state.jobs, job],
    }));
};

export const updateJob = (job: Partial<Job> & { id: string }) => {
    jobStore.setState((state) => ({
        ...state,
        jobs: state.jobs.map((j) =>
            j.id === job.id ? { ...j, ...job } : j
        ),
    }));
};

export const removeJob = (jobId: string) => {
    jobStore.setState((state) => ({
        ...state,
        jobs: state.jobs.filter((j) => j.id !== jobId),
    }));
};
