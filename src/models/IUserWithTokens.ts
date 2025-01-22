export interface IUserWithTokens {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
}//інтерфейс того якого юзкра ми отримуемо після авторизвціі