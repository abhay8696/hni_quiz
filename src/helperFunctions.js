import axios from "axios";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// scrollToElement.js
export const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

export const sendMessageToGuest = async (name, score) => {
    console.log("sending whatsapp message...");
    const url = "https://graph.facebook.com/v20.0/519821284537034/messages";

    const body = {
        messaging_product: "whatsapp",
        to: "919545831601",
        type: "template",
        template: {
            name: "hni_customer",
            language: {
                code: "en_US",
            },
            components: [
                {
                    type: "body",
                    parameters: [
                        { type: "text", text: name || "Sir/Madam" },
                        { type: "text", text: score || "5/5" },
                    ],
                },
            ],
        },
    };

    const headers = {
        headers: {
            Authorization: `Bearer EAB43nCaTCkkBOZCuJce85Hd9eBBIghTeJRPl5gvVyMfZBqTgNVvqJ62b5BSFrQixFEEb1PxmKBdijNRFZCJHeADgZBrMAsZBtVosEfumBDaWXDuNeACh5VMAdWHY2JSUeXqn8kF1lIus4wrG47Ijrow4tovSx7oxg8FZBGlqQhYPjJKsiENtfqUZBZCSOXWQv5oHP8DuRpuakGdLVaWBA4ZAc1G5omdYZD`,
            "Content-Type": "application/json",
        },
    };

    const res = await axios.post(url, body, headers);

    console.log(res.data);
};

export const sendMessageToOwner = async (name, customerContact, score) => {
    console.log("sending whatsapp message...");
    const url = "https://graph.facebook.com/v20.0/519821284537034/messages";

    const body = {
        messaging_product: "whatsapp",
        to: "919545831601",
        type: "template",
        template: {
            name: "hni_owner",
            language: {
                code: "en",
            },
            components: [
                {
                    type: "body",
                    parameters: [
                        { type: "text", text: name || "Sir/Madam" },
                        { type: "text", text: customerContact },
                        { type: "text", text: score || "5/5" },
                    ],
                },
            ],
        },
    };

    const headers = {
        headers: {
            Authorization: `Bearer EAB43nCaTCkkBOZCuJce85Hd9eBBIghTeJRPl5gvVyMfZBqTgNVvqJ62b5BSFrQixFEEb1PxmKBdijNRFZCJHeADgZBrMAsZBtVosEfumBDaWXDuNeACh5VMAdWHY2JSUeXqn8kF1lIus4wrG47Ijrow4tovSx7oxg8FZBGlqQhYPjJKsiENtfqUZBZCSOXWQv5oHP8DuRpuakGdLVaWBA4ZAc1G5omdYZD`,
            "Content-Type": "application/json",
        },
    };

    const res = await axios.post(url, body, headers);

    console.log(res.data);
};

export const addToFirestore = async (data) => {
    console.log("saving to firestore");
    try {
        await addDoc(collection(db, "users"), data);
    } catch (error) {
        console.error("Error saving user data:", error);
        alert("Failed to save user data");
    }
};
