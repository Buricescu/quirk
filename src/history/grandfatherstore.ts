/*
			
              ,-----.
            W/,-. ,-.\W
            ()>a   a<()
            (.--(_)--.)
          ,'/.-'\_/`-.\`.
        ,' /    `-'    \ `.
       /   \           /   \
      /     `.       ,'     \
     /    /   `-._.-'   \    \
   ,-`-._/|     |=|o    |\_.-<
  <,--.)  |_____| |o____|  )_ \
   `-)|    |//   _   \\|     )/
     ||    |'    |    `|
     ||    |     |     |
     ||    (    )|(    )
     ||    |     |     |
     ||    |     |     |
     ||    |_.--.|.--._|
     ||     /'""| |""`\
     []     `===' `==='  hjw

*/
import { AsyncStorage } from "react-native";
import { userGrandfathered } from "../stats";

const FREE_SUBSCRIPTION_KEY = "@Grandfathered:free-subscription";

export async function isGrandfatheredIntoFreeSubscription(): Promise<boolean> {
  try {
    const value = await AsyncStorage.getItem(FREE_SUBSCRIPTION_KEY);
    return !!value;
  } catch (err) {
    console.error(err);
    return false;
  }
}

// TODO: Remove
export async function grandfatherUserIntoFreeSubscription() {
  try {
    await AsyncStorage.setItem(FREE_SUBSCRIPTION_KEY, "true");
    userGrandfathered();
  } catch (err) {
    console.error(err);
  }
}
