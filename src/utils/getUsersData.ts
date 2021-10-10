
// eslint-disable-next-line @typescript-eslint/ban-types
export default async function getUsers(): Promise<Object | null> {
    try {
        const response = await fetch("/usersdata.json");
        const vehicledata = await response.json();
        return vehicledata;
    } catch (err) {
        console.error(err);
        return null;
    }
}
