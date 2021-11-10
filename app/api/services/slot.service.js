import Database from "../config/db.config";

export class SlotService {
    db = Database.db;
    async createSlot(data) {
        try {
            let create;
            let conflictcheck;
            let slot = {};

            slot.type = data.type;
            slot.date = data.date;
            slot.time = data.time;
            slot.status = data.status;

            conflictcheck = await this.checkConflict(data);

            if(conflictcheck.status == 200) {
                create = await this.db.collection("slots").insertOne(slot);
                return {status:200,content:create}
            } else {
                return {status:400,content:"Conflict found for the requested slot"};
            }
        } catch (error) {
            console.log(error);
            return {status:400, error: error};
        }
    }

    async checkConflict(data) {
        try {
            let check = await this.db.collection("slots").find({"date":data.date,"time":data.time}).toArray();
            if (check.length) {
                console.log("conflict alert");
                return {status:400, error: "Conflict found"};
            } else {
                return {status:200, content: "No conflict found"};
            }
        } catch (error) {
            console.log(error);
            return {status:400, error: error};
        }
    }

    async listSlots(data) {
        try {
            let slots = await this.db.collection("slots").find({"date":data.date,"type":data.type}).toArray();
            return {status:200,content: slots};
        } catch (error) {
            console.log(error);
            return {status:400, error: error};
        }
    }

}

export default new SlotService();