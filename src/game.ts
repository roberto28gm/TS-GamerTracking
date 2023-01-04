
class Game {
    protected id: number;
    protected title: string;
    protected score: number;
    protected time: number;
    protected finished: boolean;

    constructor(id: number, title: string, score: number, time: number, finished: boolean) {
        this.id = id;
        this.title = title;
        this.score = score;
        this.time = time;
        this.finished = finished;
    }

    AddGame(game: Game): void {
        // TODO
        // Add a new game to the list
    }

    DeleteGame(id: number): void {
        // TODO
        // Delete a game by Id
    }
}