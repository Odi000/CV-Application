import { EduRecord, JobRecord } from "./exampleData";

export function updateValue(e, hook) {
    hook(e.target.value)
}

export function formatDate(date, isEndDate = false) {
    if (!date) return false;
    const selectedDate = format(new Date(date));
    const todaysDate = format(new Date());

    if (selectedDate === todaysDate && isEndDate) return "present";
    else return selectedDate


    function format(date) {
        const options = {
            year: "numeric",
            month: "2-digit"
        };

        return new Intl.DateTimeFormat("en-GB", options).format(date);
    }
}

export function cancelForm(hooks, form) {
    for (let key in hooks) {
        if (key === "setOpenForm") {
            hooks[key]({ isIt: false, [form]: undefined });
            continue;
        } else if (key === "setEduList" || key === "setExpList") continue;

        hooks[key]("")
    }
}

export function editSelected(setOpenForm, selectedEl, hooks, form) {
    const fullDate = selectedEl.startEndDate.split(" – ");
    let stDate = fullDate[0].split("/");
    let enDate = fullDate[1].split("/");

    if (enDate[0] === "present") {
        const currentDate = new Date().toISOString().split("T")[0];
        enDate = currentDate;
    } else {
        enDate.splice(1, 0, "02");
        enDate = enDate.join("-");
        enDate = new Date(enDate).toISOString().split("T")[0]
    }

    stDate.splice(1, 0, "02");
    stDate = stDate.join("-");
    stDate = new Date(stDate).toISOString().split("T")[0];

    if (form === "education") {
        hooks.setSchool(selectedEl.school);
        hooks.setDegree(selectedEl.degree);
        hooks.setStartDate(stDate);
        hooks.setEndDate(enDate);
        hooks.setLocation(selectedEl.location);
    } else {
        hooks.setCompany(selectedEl.company)
        hooks.setPosition(selectedEl.position)
        hooks.setExpStartDate(stDate)
        hooks.setExpEndDate(enDate)
        hooks.setExpLocation(selectedEl.location)
        hooks.setExpDescription(selectedEl.description)
    }
    setOpenForm({ isIt: true, [form]: selectedEl });
}

export function deleteBtn(openForm, list, hooks, form) {

    if (openForm[form]) {
        const index = list.findIndex((el) => el.key === openForm[form].key);
        list.splice(index, 1);
        form === "education" ? hooks.setEduList([...list]) : hooks.setExpList([...list]);
    }
    cancelForm({ ...hooks }, form);
}


//Bane si ky funksioni te veprojne edhe per modulin e eksperiences
//Mrapa vazhdo me butonat si kan met
export function saveBtn(openForm, list, inputs, hooks, form) {
    const formatedStDate = formatDate(inputs.startDate ? inputs.startDate : inputs.expStartDate);
    const formatedEnDate = formatDate(inputs.endDate ? inputs.endDate : inputs.expEndDate, true);

    if (!formatedStDate || !formatedEnDate) {
        return alert("Date is required!")
    } else if (openForm[form]) {
        const existingEl = list.find((el) => el.key === openForm[form].key);

        for (const key in inputs) {
            if (
                key == "startDate" ||
                key == "endDate" ||
                key == "expStartDate" ||
                key == "expEndDate"
            ) {
                continue;
            } else if (key == "expDescription") {
                existingEl.description = inputs[key];
            } else if (key == "expLocation") {
                existingEl.location = inputs[key];
            }
            existingEl[key] = inputs[key];
        }
        existingEl.startEndDate = `${formatedStDate} – ${formatedEnDate}`;

        form == "education" ? hooks.setEduList([...list]) : hooks.setExpList([...list]);

        //Close form after edit
        cancelForm({ ...hooks }, form);
    } else {
        if (form == "education") {
            const newEl = new EduRecord(
                inputs.school,
                inputs.degree,
                inputs.location,
                formatedStDate,
                formatedEnDate,
            )
            hooks.setEduList([...list, newEl]);
        } else {
            const newEl = new JobRecord(
                inputs.company,
                inputs.position,
                inputs.location,
                formatedStDate,
                formatedEnDate,
                inputs.description
            )
            hooks.setEduList([...list, newEl]);
        }
        cancelForm({ ...hooks }, form);
    }
}
