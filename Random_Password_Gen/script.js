function generatePassword(PasswordLength, IncludeLowercase, IncludeUppercase, IncludeNumbers, IncludeSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let AllowedChars = '';
    let password = '';

    AllowedChars += IncludeLowercase ? lowercase : '';
    AllowedChars += IncludeUppercase ? uppercase : '';
    AllowedChars += IncludeNumbers ? numbers : '';
    AllowedChars += IncludeSymbols ? symbols : '';

    if(PasswordLength <= 0) {
        return 'Length must be greater than 0';
    } 

    if(AllowedChars.length === 0) {
        return 'At least one character type must be selected';
    }

    for (let i = 0; i < PasswordLength; i++) {
        const randomIndex = Math.floor(Math.random() * AllowedChars.length);
        password += AllowedChars.charAt(randomIndex);
    }
    return password;
}

const PasswordLength = 10;
const IncludeLowercase = true;
const IncludeUppercase = true;
const IncludeNumbers = true;
const IncludeSymbols = true;

const password = generatePassword(PasswordLength, IncludeLowercase, IncludeUppercase, IncludeNumbers, IncludeSymbols);
console.log(`Generated Password: ${password}`);