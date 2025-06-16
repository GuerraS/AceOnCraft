export interface ProductI {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export interface AdvanceWeaponModel {
    name: string;
    code: string;
    image: string;
}

export interface FixesI{
    id: number;
    name: string;
    code: string;
}