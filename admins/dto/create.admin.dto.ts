export interface CreateAdminDto {
    id: string;
    email: string;
    password: string;
    permissionLevel: number;
    firstName?: string;
    lastName?: string;
}