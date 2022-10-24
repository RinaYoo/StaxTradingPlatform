package com.stax.model;

public class Crypto {

    private String name;
    private String maxVolume;
    private String cost;

    public Crypto(String name, String maxVolume, String cost) {
        this.name = name;
        this.maxVolume = maxVolume;
        this.cost = cost;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMaxVolume() {
        return maxVolume;
    }

    public void setMaxVolume(String maxVolume) {
        this.maxVolume = maxVolume;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }
}
