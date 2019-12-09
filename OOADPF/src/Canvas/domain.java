package Canvas;

public class domain extends shape {
	public double top;
    public double left;
    public String Shortname,Description,Property,Type;

    public domain(double top, double left,String shortname,String description,String property,String type) {
        this.top = top;
        this.left = left;
        this.Shortname =shortname ;
        this.Description=description;
        this.Property=property;
        this.Type=type;
    }
    
    public void changePos(double top,double left) {
        this.top = top;
        this.left = left;
    }
    
    public void editInfo(String shortname,String description,String property,String type){
		this.Shortname =shortname ;
        this.Description=description;
        this.Property=property;
        this.Type=type;
	}
    
    public String getDescription() {
    	return this.Description;
    }
    public double getTop() {
        return this.top;
    }
    public double getLeft() {
        return this.left;
    }
    public String getShortname() {
    	return this.Shortname;
    }
    public String getProperty() {
    	return this.Property;
    }
    public String getType() {
    	return this.Type;
    }
    
}
