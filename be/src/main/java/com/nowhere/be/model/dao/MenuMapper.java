package com.nowhere.be.model.dao;

import com.nowhere.be.model.dto.MenuDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MenuMapper {
    List<MenuDTO> selectAllMenus();

    MenuDTO selectMenuByCode(int menuCode);

    int getLastMenuCode();

    void insertMenu(MenuDTO menu);

    void updateMenu(MenuDTO menu);

    void deleteMenu(int menuCode);

    List<MenuDTO> searchMenu(String type, String name);
}
