import { createContext, use, useContext, useState } from "react";

export interface UserRegistrationData {
    firstName: string;
    lastName: string;
    countryCode: string;
    phoneNumber: string;
    profileImage: string | null;
}
interface UserRegistrationContextType {
    userData: UserRegistrationData;
    setUserData: React.Dispatch<React.SetStateAction<UserRegistrationData>>;
}

const UserRegistrationContext = createContext<UserRegistrationContextType | undefined>(undefined);

export const UserRegistrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<UserRegistrationData>({
        firstName: "",
        lastName: "",
        countryCode: "",
        phoneNumber: "",
        profileImage: null,
    });
    return (
        <UserRegistrationContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserRegistrationContext.Provider>
    );
};

export const useUserRegistration = ():UserRegistrationContextType=>{
    const ctx = useContext(UserRegistrationContext);
    if(!ctx){
        throw new Error("useUserRegistration must be used within a UserRegistrationProvider");
    }
    return ctx;
};