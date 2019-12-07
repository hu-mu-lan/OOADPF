package Canvas;

public class constraint implements line{
	tring type = "";	
	phenomenon Phenomenon = null;
	
	shape origin = null;
	shape terminal = null;
	
	public constraint(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		this.Phenomenen=new conInteractionPhenomenon();
	}
	
	public editInfo(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
	}
	
	public displayAddPhonomenon(String a){
		Phonomenon.addPhonomenon(a);
	}
	
	public displayMinusPhonomenon(String a){
		Phonomenon.minusPhonomenon(a);
	}
	
	public displayChangeIsConstrint(isConstraint){
		Phonomenon.changeConstraint(isConstraint);
	}

}