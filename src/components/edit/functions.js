import { EduRecord } from "../../App";

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
        }
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

    // for(let key in hooks) {
    //     console.log(key)
    // }
    console.log(selectedEl)

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
    if (form === "education") {
        if (openForm.education) {
            const index = list.findIndex((el) => el.key === openForm.education.key);
            list.splice(index, 1);
            hooks.setEduList([...list]);
        }
        cancelForm({
            setSchool: hooks.setSchool,
            setDegree: hooks.setDegree,
            setStartDate: hooks.setStartDate,
            setEndDate: hooks.setEndDate,
            setLocation: hooks.setLocation,
            setOpenForm: hooks.setOpenForm
        }, form);
    } else {
        if (openForm.experience) {
            const index = list.findIndex((el) => el.key === openForm.experience.key);
            list.splice(index, 1);
            hooks.setExpList([...list]);
        }
        //Ndrroj hooksat me perkatset ne exp
        cancelForm({
            setSchool: hooks.setSchool,
            setDegree: hooks.setDegree,
            setStartDate: hooks.setStartDate,
            setEndDate: hooks.setEndDate,
            setLocation: hooks.setLocation,
            setOpenForm: hooks.setOpenForm
        }, form);

    }
}


//Bane si ky funksioni te veprojne edhe per modulin e eksperiences
//Mrapa vazhdo me butonat si kan met
export function saveBtn(openForm, eduList, inputs, hooks, form) {
    console.log(inputs)
    const formatedStDate = formatDate(inputs.startDate);
    const formatedEnDate = formatDate(inputs.endDate, true);

    if (!formatedStDate || !formatedEnDate) {
        return alert("Date is required!")
    } else if (openForm.education) {
        const existingEl = eduList.find((el) => el.key === openForm.education.key);
        existingEl.school = inputs.school;
        existingEl.degree = inputs.degree;
        existingEl.location = inputs.location;
        existingEl.startEndDate = `${formatedStDate} – ${formatedEnDate}`;
        hooks.setEduList([...eduList]);

        //Close form after edit
        cancelForm({
            setSchool: hooks.setSchool,
            setDegree: hooks.setDegree,
            setStartDate: hooks.setStartDate,
            setEndDate: hooks.setEndDate,
            setLocation: hooks.setLocation,
            setOpenForm: hooks.setOpenForm
        }, form);
    } else {
        const newEl = new EduRecord(
            inputs.school,
            inputs.degree,
            inputs.location,
            formatedStDate,
            formatedEnDate,
        )
        hooks.setEduList([...eduList, newEl]);

        //Close form after save
        cancelForm({
            setSchool: hooks.setSchool,
            setDegree: hooks.setDegree,
            setStartDate: hooks.setStartDate,
            setEndDate: hooks.setEndDate,
            setLocation: hooks.setLocation,
            setOpenForm: hooks.setOpenForm
        }, form);
    }
}
