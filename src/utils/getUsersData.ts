/* eslint-disable @typescript-eslint/ban-types */
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Implicitly has any type
export default async function getUsers(): Promise<Object | null> {
    await axios
        .get("https://api.github.com/users?per_page=10")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            //this.availabilityMessage = false;
            console.log(error);
        });
    //   try {
    //     const response = await fetch("/usersdata.json");
    //     const vehicledata = await response.json();
    //     return vehicledata;
    //   } catch (err) {
    //     console.error(err);
    //     return null;
    //   }
}
