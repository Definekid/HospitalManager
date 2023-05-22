window.onload = function () {
    var toPatient = $(".rukou_patient");
    var toDoctor = $(".rukou_doctor");
    var toDrug = $(".rukou_drug");

    toPatient.click(function () {
        window.location.href = "houtai_patient.html";
    });

    toDoctor.click(function () {
        window.location.href = "houtai_doctor.html";
    }
    );

    toDrug.click(function () {
        window.location.href = "houtai_drug.html";
    }
    )
}