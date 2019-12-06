package Canvas;

public class domain implements shape{
	String description = "";
	String shortName = "";
	String property = "";
	String type = "";
	
	public void editInfo(String Description, String ShortName, String Property, String Type) {
		this.description = Description;
		this.shortName = ShortName;
		this.property = Property;
		this.type = Type;
	}

}
