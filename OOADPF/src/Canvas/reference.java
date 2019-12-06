package Canvas;

public class reference implements line{
	String type = "";	
	shape origin = null;
	shape terminal = null;
	phenomenon Phenomenon = null;
	public void editInfo(String type, shape origin, shape terminal) {
		this.type = type;
		this.origin = origin;
		this.terminal = terminal;
	}

	public void editPhenomenon(phenomenon Phenomenon) {
		this.Phenomenon = Phenomenon;
	}
}
