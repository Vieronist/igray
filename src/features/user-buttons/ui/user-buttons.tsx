import { UserButton } from "@/entities/user-button"




export const UserButtons = () => {
    return (
        <ul className="flex gap-2">
            <UserButton path="HeartStraight.svg" />
            <UserButton path="user.svg" />
            <UserButton path="ShoppingCart.svg" />
        </ul>
    )
}