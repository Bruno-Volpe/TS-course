type VotationOption = {
    numberOfVotes: number,
    option: string
}

export class Votation {
    private _votationOption: VotationOption[] = []

    constructor(public details: string) {}

    addVotatioOption(votationOptation: VotationOption): void {
        this._votationOption.push(votationOptation)
    }

    vote(voteIndex: number): void {
        if(!this._votationOption[voteIndex]) return

        this._votationOption[voteIndex].numberOfVotes += 1
    }

    get votationOptions(): VotationOption[] {
        return this._votationOption
    }
}

export class VotationApp {
    private votations: Votation[] = []

    addVotation(votation: Votation): void {
        this.votations.push(votation)
    }

    showVotations(): void {
        for (const votation of this.votations) {
            console.log(votation.details)

            for (const votationsOption of votation.votationOptions) {
                console.log(votationsOption.option, votationsOption.numberOfVotes)
            }
        }
    }
}

const votation1 = new Votation('Perguntaaaa?')
votation1.addVotatioOption({option: 'a', numberOfVotes: 0})
votation1.addVotatioOption({option: 'b', numberOfVotes: 0})
votation1.addVotatioOption({option: 'c', numberOfVotes: 0})
votation1.addVotatioOption({option: 'd', numberOfVotes: 0})

const votationApp = new VotationApp()
votationApp.addVotation(votation1)

votationApp.showVotations()
