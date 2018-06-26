op = "";
first = "";
need_clear = false;

function set_digit (obj)
{
	digit = obj.textContent;
	result = display.textContent;
	if ((result=="0" && digit!=".") || need_clear) result = "";
	need_clear = false;
	if (digit!="." || result.indexOf(".")==-1) result += digit;
	display.textContent = result;
}

function get_result (obj)
{
	result = display.textContent;
	switch (obj.textContent) {
		case "←":
			result = result.slice(0, -1);
			if (result=="") result = "0";
			break;
		case "√":
			result = Math.sqrt (result);
			break;
		case "sin":
			result = Math.sin (result);
			break;
		case "cos":
			result = Math.cos (result);
			break;
		case "=":
			switch (op) {
				case "÷":
					result = first / result;
					break;
				case "×":
					result = first * result;
					break;
				case "−":
					result = first - result;
					break;
				case "+":
					result = Number(first) + Number(result);
					break;
			}
			break;
	}
	display.textContent = result;
	need_clear = true;
}

function set_op (obj)
{
	op = obj.textContent;
	first = display.textContent;
	need_clear = true;
}
