import Button from "../../ui/Button";

function CreateUser() {
    return (
        <form>
    <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
    </p>
    <input type="text"
    placeholder="Your full name"
    // value={username}
    // onChange={(e) => setUsername(e.target.value)}
    className="input mb-8 w-72"
    />
    <div>
        <Button type="primary">Statrt ordering</Button>
    </div>
</form>
    )
}

export default CreateUser;