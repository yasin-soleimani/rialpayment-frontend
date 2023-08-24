import store from "@/store";

const showAlert = store.dispatch("auth/toggleShowAlert");

export default showAlert;
