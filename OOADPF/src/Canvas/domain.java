package Canvas;

public class domain extends shape {
    public double width;
    public double height;
    public String Shortname,Description,Property,Type;

    public domain(double w, double h,String shortname,String description,String property,String type) {
        this.width = w;
        this.height = h;
        this.Shortname =shortname ;
        this.Description=description;
        this.Property=property;
        this.Type=type;
        canvas.addShape(this);
    }
    
    public void changePos(double width,double height) {
    	canvas.minusShape(this);
    	this.width=width;
    	this.height=height;
    	canvas.addShape(this);
    }
    
    public void editInfo(String shortname,String description,String property,String type){
		canvas.minusShape(this);
		this.Shortname =shortname ;
        this.Description=description;
        this.Property=property;
        this.Type=type;
		canvas.addShape(this);
	}
    
    public String getDescription() {
    	return this.Description;
    }
    public double getWidth() {
        return this.width;
    }
    public double getHeight() {
        return this.height;
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
