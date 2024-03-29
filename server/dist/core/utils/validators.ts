import validator from 'validator';

export async function validEmail(email: string): Promise<boolean> {
    if(!validator.isEmail(email)){
        throw new Error("Invalid email");
    }
    return true;
}

export async function validPassword(password: string): Promise<boolean> {
    if(!(validator.isLength(password, {min: 8, max: 16}))){
        throw new Error("Length of password must be between 8 and 16 characters");
    }
    if(!(/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(password))){
        throw new Error("Password must have at least one special character");
    }
    if(!(/[A-Z]/.test(password))){
        throw new Error("Password must have at least one uppercase character");
    }
    if(!(/[a-z]/.test(password))){
        throw new Error("Password must have at least one lowecase character");
    }
    return true;
}

export async function validURL(url: string): Promise<boolean> {
    if(!url){
        throw new Error("URL must not be empty");
    }
    if(!validator.isURL(url, { 
        protocols: ['https'],
        require_valid_protocol: true,
        validate_length: true,
        allow_underscores: false
    }))
    return true;
}