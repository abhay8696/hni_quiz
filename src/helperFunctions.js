import axios from "axios";
import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

// scrollToElement.js
export const scrollToElement = (id) => {
    console.log("scrolling to ", id);
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
    // console.log("saving to firestore");
    try {
        await addDoc(collection(db, "production_users"), data);
    } catch (error) {
        console.error("Error saving user data:", error);
        alert("Failed to save user data");
    }
};

export const getAllUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("Fetched Users:", users);
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        alert("Failed to fetch user data");
        return [];
    }
};

export const downloadCSV = (users) => {
    // Convert user data to CSV format
    const headers = ["First Name", "Last Name", "Contact"];
    const rows = users.map((user) => [
        user.firstName,
        user.lastName,
        user.contact,
    ]);

    const csvContent = [
        headers.join(","), // Add headers row
        ...rows.map((row) => row.join(",")), // Add data rows
    ].join("\n");

    // Create Blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "users.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
