
package com.vo.dropdown;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity
@Table(name = "DROPDOWN_CHILD")
public class DropdownChildVo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "DROPDOWN_CHILD_VALUE")
    private String dropdownChildValue;
    @Basic(optional = false)
    @Column(name = "DROPDOWN_PARENT")
    private int dropdownParent;
    @Basic(optional = false)
    @Column(name = "DROPDOWN_CHILD_KEY")
    private String dropdownChildKey;

    public DropdownChildVo() {
    }

    public DropdownChildVo(Integer id) {
        this.id = id;
    }

    public DropdownChildVo(Integer id, String dropdownChildValue, int dropdownParent, String dropdownChildKey) {
        this.id = id;
        this.dropdownChildValue = dropdownChildValue;
        this.dropdownParent = dropdownParent;
        this.dropdownChildKey = dropdownChildKey;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDropdownChildValue() {
        return dropdownChildValue;
    }

    public void setDropdownChildValue(String dropdownChildValue) {
        this.dropdownChildValue = dropdownChildValue;
    }

    public int getDropdownParent() {
        return dropdownParent;
    }

    public void setDropdownParent(int dropdownParent) {
        this.dropdownParent = dropdownParent;
    }

    public String getDropdownChildKey() {
        return dropdownChildKey;
    }

    public void setDropdownChildKey(String dropdownChildKey) {
        this.dropdownChildKey = dropdownChildKey;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof DropdownChildVo)) {
            return false;
        }
        DropdownChildVo other = (DropdownChildVo) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.vo.DropdownChildVo[ id=" + id + " ]";
    }
    
}
