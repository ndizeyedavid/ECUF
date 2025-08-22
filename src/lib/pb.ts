import pocketbase from "pocketbase";

const pb = new pocketbase(import.meta.env.VITE_PB_URL);
pb.autoCancellation(false);

export default pb;
