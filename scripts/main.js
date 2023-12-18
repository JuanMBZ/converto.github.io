function calculateLength() {
    //Empty container to store converted lengths
    let convert = {}

    //Calculations for conversions
    convert.cm_to_in = ($("#length_cm").val() / 2.54)
    $("#length_in").val(convert.cm_to_in);
    convert.m_to_yd = ($("#length_m").val() * 1.094)
    $("#length_yd").val(convert.m_to_yd);
    convert.km_to_mi = ($("#length_km").val() / 1.609)
    $("#length_mi").val(convert.km_to_mi) 
}

function calculateTemp() {
    // Empty container to store converted temps
    let convert = {}
    
    // Calculations
    convert.c_to_f = ($("#celsius-temp").val() * 9 / 5 + 32 )
    $("#c_to_f-temp").val(convert.c_to_f);
    convert.f_to_c = (($("#farenheit-temp").val() - 32 ) * 5 / 9 )
    $("#f_to_c-temp").val(convert.f_to_c);
    convert.c_to_k = ($("#celsius2-temp").val() * 1 + 273.15 )
    $("#c_to_k-temp").val(convert.c_to_k);
}

function calculateWeight() {
    //Empty container to store converted weights
    let convert = {}

    // Calculations
    convert.g_to_oz = ($("#weight_g").val() / 28.35 )
    $("#weight_oz").val(convert.g_to_oz);
    convert.kg_to_lbs = ($("#weight_kg").val() * 2.205 )
    $("#weight_lbs").val(convert.kg_to_lbs);
    convert.t_to_it = ($("#weight_t").val() / 1.016 )
    $("#weight_it").val(convert.t_to_it);
}

// Code taken from the internet for converting decimal to binary, octal, and hexadecimal in javascript
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}
function decimalToOctal(decimal) {
    return (decimal >>> 0).toString(8);
}
function decimalToHexa(decimal) {
    return (decimal >>> 0).toString(16);
}
function convertNumSys() {
    //Empty container for storing conversions
    let convert = {}

    //Conversions
    convert.d_to_bin = decimalToBinary($("#decimal1").val())
    $("#binary").val(convert.d_to_bin);
    convert.d_to_oct = decimalToOctal($("#decimal2").val())
    $("#octal").val(convert.d_to_oct);
    convert.d_to_hexa = decimalToHexa($("#decimal3").val())
    $("#hexadecimal").val(convert.d_to_hexa);
}

// This updates the values in the class "length" every time a new value gets inputted
$(function()
 {
    $(".length").on("change keyup", calculateLength)
 })

// This updates the values in the class "temp" every time a new value gets inputted
$(function()
 {
    $(".temp").on("change keyup", calculateTemp)
 })

// This updates the values in the class "weight" every time a new value gets inputted
$(function()
{
   $(".weight").on("change keyup", calculateWeight)
})

// Again, this updates the values in the class "numsys" every time a new value gets inputted
$(function()
{
   $(".numsys").on("change keyup", convertNumSys)
})
