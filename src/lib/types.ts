export interface Sessions {
    name: string;
    description: string;
    has_reserves: boolean;
    created_at: string;
    created_by: number;
    current_reserves: number;
    reserved_by_user: boolean;
    date: string;
    end_time: string;
    id: number;
    max_allowed_reserves: number;
    start_time: string;
    status: "free" | "half" | "full";
    updated_at: string;
    type: string;
    cancelled: boolean;
}
