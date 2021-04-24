export const strongPasswordPattern = /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
export const emailPattern = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
export const usernamePattern = /^[a-zA-z0-9]{4,}$/;