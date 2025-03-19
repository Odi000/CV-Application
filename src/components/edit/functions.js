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
            hooks[key]({ isIt: false, [form]: undefined});
            continue;
        }
        hooks[key]("")
    }
}

export function editMode(setOpenForm, education, eduHooks){
    const fullDate = education.startEndDate.split(" – ");
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
    stDate = new Date(stDate).toISOString().split("T")[0]

    eduHooks.setSchool(education.school);
    eduHooks.setDegree(education.degree);
    eduHooks.setStartDate(stDate);
    eduHooks.setEndDate(enDate);
    eduHooks.setLocation(education.location);
    setOpenForm({ isIt: true, education });
}