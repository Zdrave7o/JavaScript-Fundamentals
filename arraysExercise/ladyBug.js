function findLadyBugs(input) {
    const fieldSize = Number(input[0]);
    let ladyBugsLocations = input[1].split(" ").map(Number);
    let field = Array(fieldSize).fill(0);

    // Place ladybugs on the field
    for (let idx of ladyBugsLocations) {
        if (idx >= 0 && idx < fieldSize) {
            field[idx] = 1;
        }
    }

    let commands = input.slice(2);

    for (let command of commands) {
        let [startIdx, direction, flyLength] = command.split(" ");
        startIdx = Number(startIdx);
        flyLength = Number(flyLength);

        if (field[startIdx] !== 1 || startIdx < 0 || startIdx >= fieldSize) {
            continue; // No ladybug or invalid index
        }

        field[startIdx] = 0; // Ladybug leaves current position

        let position = startIdx;
        while (true) {
            if (direction === "right") {
                position += flyLength;
            } else if (direction === "left") {
                position -= flyLength;
            }

            if (position < 0 || position >= fieldSize) {
                break; // Ladybug flies away
            }

            if (field[position] === 0) {
                field[position] = 1; // Ladybug lands
                break;
            }
            // If cell is occupied, keep flying
        }
    }

    console.log(field.join(" "));
}

findLadyBugs([ 5, '3', '3 left 2', '1 left -2']);