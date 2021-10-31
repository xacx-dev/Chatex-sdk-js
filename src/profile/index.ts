import {getProfile, Profile} from "./get-profile";

export interface ProfileModule {
    getProfile: () => Promise<Profile | null>;
}

export const profile: ProfileModule = {
    getProfile,
};
